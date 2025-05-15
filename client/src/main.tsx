import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Tarek Eltony | HR & Organizational Development Consultant</title>
      <meta name="description" content="Tarek Eltony - People & Culture Strategist and Organizational Development Consultant specializing in HR transformation and business excellence across GCC and Middle East." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tarekeltony.com/" />
      <meta property="og:title" content="Tarek Eltony | HR & Organizational Development Consultant" />
      <meta property="og:description" content="People & Culture Strategist and Organizational Development Consultant with extensive experience across GCC and Middle East." />
      <meta property="og:image" content="https://i.postimg.cc/wTd9mgpd/Generate-a-high-quality-professional-portrait-6.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tarekeltony.com/" />
      <meta property="twitter:title" content="Tarek Eltony | HR & Organizational Development Consultant" />
      <meta property="twitter:description" content="People & Culture Strategist and Organizational Development Consultant with extensive experience across GCC and Middle East." />
      <meta property="twitter:image" content="https://i.postimg.cc/wTd9mgpd/Generate-a-high-quality-professional-portrait-6.jpg" />
      <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    </Helmet>
    <App />
  </HelmetProvider>
);
