import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker, 
  Line,
  ZoomableGroup
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { countries, connectionLines } from "@/data/globalExperience";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipId, setTooltipId] = useState("worldmap-tooltip");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Detect theme
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkTheme(isDark);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkTheme(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Create a random ID for the tooltip on mount
  useEffect(() => {
    setTooltipId(`worldmap-tooltip-${Math.random().toString(36).substring(2, 9)}`);
  }, []);

  // Calculate connection lines
  const lines = useMemo(() => {
    return connectionLines.map((connection, index) => {
      const fromCountry = countries.find(c => c.name === connection.from);
      const toCountry = countries.find(c => c.name === connection.to);
      
      if (!fromCountry || !toCountry) return null;
      
      return {
        from: fromCountry.coordinates,
        to: toCountry.coordinates,
        fromName: fromCountry.name,
        toName: toCountry.name,
        fromColor: fromCountry.color,
        toColor: toCountry.color
      };
    }).filter(Boolean);
  }, []);

  return (
    <div className="relative w-full">
      {/* Flags Section */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {countries.map((country) => (
          <motion.div
            key={country.code}
            className={`flag-container relative cursor-pointer rounded-lg p-1.5 border-2 ${
              selectedCountry === country.name 
                ? "border-primary shadow-md" 
                : "border-transparent"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCountry(
              selectedCountry === country.name ? null : country.name
            )}
            data-tooltip-id={tooltipId}
            data-tooltip-content={`${country.name}: ${country.description}`}
            onMouseEnter={() => setTooltipContent(`${country.name}: ${country.description}`)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedCountry(
                  selectedCountry === country.name ? null : country.name
                );
              }
            }}
            aria-label={`${country.name} - ${country.description}`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center overflow-hidden shadow-sm bg-white border border-gray-100">
              <span className="text-5xl md:text-6xl" role="img" aria-label={country.name}>
                {country.flag}
              </span>
            </div>
            <div className="font-medium text-sm text-center mt-2">{country.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Map Section */}
      <motion.div
        className="border border-gray-200 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={`w-full h-[400px] md:h-[500px] ${isDarkTheme ? 'dark-map' : 'light-map'}`}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 150,
              center: [0, 25]
            }}
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <ZoomableGroup zoom={1} maxZoom={5} minZoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isCountryWorked = countries.some(
                      (country) => country.code === geo.properties.iso_a2
                    );
                    const countryData = countries.find(
                      (country) => country.code === geo.properties.iso_a2
                    );
                    const isSelected = selectedCountry === countryData?.name;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          isSelected
                            ? countryData?.color || "#3388ff"
                            : isCountryWorked
                            ? countryData?.color + "99" || "#33333399"
                            : isDarkTheme ? "#2A2A2A" : "#EAEAEC"
                        }
                        stroke={isDarkTheme ? "#444444" : "#D6D6DA"}
                        strokeWidth={0.5}
                        style={{
                          default: {
                            outline: "none",
                            transition: "all 0.3s ease"
                          },
                          hover: {
                            fill: isCountryWorked 
                              ? countryData?.color || "#3388ff"
                              : isDarkTheme ? "#3D3D3D" : "#F5F5F5",
                            outline: "none",
                            cursor: isCountryWorked ? "pointer" : "default"
                          },
                          pressed: {
                            outline: "none"
                          }
                        }}
                        onClick={() => {
                          if (isCountryWorked && countryData) {
                            setSelectedCountry(
                              selectedCountry === countryData.name 
                                ? null 
                                : countryData.name
                            );
                          }
                        }}
                        data-tooltip-id={isCountryWorked ? tooltipId : undefined}
                        data-tooltip-content={countryData 
                          ? `${countryData.name}: ${countryData.description}` 
                          : undefined
                        }
                        onMouseEnter={() => {
                          if (isCountryWorked && countryData) {
                            setTooltipContent(
                              `${countryData.name}: ${countryData.description}`
                            );
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Connection Lines */}
              {lines.map((line, i) => {
                if (!line) return null;

                const shouldRenderLine = 
                  !selectedCountry || 
                  selectedCountry === line.fromName || 
                  selectedCountry === line.toName;

                if (!shouldRenderLine) return null;

                const isSelectedLine = 
                  selectedCountry === line.fromName || 
                  selectedCountry === line.toName;

                return (
                  <Line
                    key={`line-${i}`}
                    from={line.from}
                    to={line.to}
                    stroke={isSelectedLine ? "#ff6b6b" : "#ff6b6b66"}
                    strokeWidth={isSelectedLine ? 1.5 : 1}
                    strokeLinecap="round"
                    strokeDasharray={isSelectedLine ? "none" : "5,5"}
                    className="connection-line"
                    onClick={() => {
                      if (selectedCountry !== line.fromName && 
                          selectedCountry !== line.toName) {
                        setSelectedCountry(line.fromName);
                      }
                    }}
                  />
                );
              })}

              {/* Markers for each country */}
              {countries.map((country) => {
                const isSelected = selectedCountry === country.name;
                const shouldHighlight = 
                  !selectedCountry || 
                  selectedCountry === country.name || 
                  lines.some(
                    line => (line?.fromName === selectedCountry && line?.toName === country.name) ||
                            (line?.toName === selectedCountry && line?.fromName === country.name)
                  );
                
                if (!shouldHighlight) return null;

                return (
                  <Marker 
                    key={country.code} 
                    coordinates={country.coordinates as [number, number]}
                    data-tooltip-id={tooltipId}
                    data-tooltip-content={`${country.name}: ${country.description}`}
                    onMouseEnter={() => {
                      setTooltipContent(`${country.name}: ${country.description}`);
                    }}
                  >
                    <g
                      onClick={() => {
                        setSelectedCountry(
                          selectedCountry === country.name ? null : country.name
                        );
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <circle
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? country.color : "#FFFFFF"}
                        stroke={country.color}
                        strokeWidth={isSelected ? 2 : 1.5}
                        className="map-marker"
                      />
                    </g>
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </motion.div>

      {/* Country Details Panel - Shows up when a country is selected */}
      {selectedCountry && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-5 bg-card rounded-xl shadow-md border border-gray-200"
        >
          <div className="flex items-start justify-between">
            {countries.map((country) => (
              country.name === selectedCountry && (
                <div key={country.code} className="w-full">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-2">{country.flag}</span>
                    <h3 className="text-xl font-bold gradient-text">{country.name}</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">{country.description}</p>
                  {country.projects && country.projects.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Key Projects:</h4>
                      <ul className="list-disc list-inside text-foreground/80">
                        {country.projects.map((project, idx) => (
                          <li key={idx} className="mb-1">{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </motion.div>
      )}

      <Tooltip id={tooltipId} place="top" />

      {/* Global styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .dark-map .rsm-geographies path {
          transition: fill 0.3s ease;
        }
        .connection-line {
          transition: stroke 0.3s ease, stroke-width 0.3s ease;
        }
        .map-marker {
          transition: r 0.3s ease, fill 0.3s ease, stroke-width 0.3s ease;
        }
        `
      }} />
    </div>
  );
};

export default WorldMap;