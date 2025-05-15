import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would submit to an API
      // await apiRequest("POST", "/api/contact", data);
      
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="rounded-lg h-12 border-gray-200 focus:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    {...field} 
                    className="rounded-lg h-12 border-gray-200 focus:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Company (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your company" 
                    {...field} 
                    className="rounded-lg h-12 border-gray-200 focus:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Service of Interest</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="rounded-lg h-12 border-gray-200">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="people-culture">People & Culture Transformation</SelectItem>
                    <SelectItem value="org-development">Organizational Development & Change Leadership</SelectItem>
                    <SelectItem value="talent-management">Talent Management & Performance Optimization</SelectItem>
                    <SelectItem value="hr-process">HR Process Excellence & Policy Design</SelectItem>
                    <SelectItem value="strategic-planning">Strategic Planning & Business Advisory</SelectItem>
                    <SelectItem value="digital-transformation">AI, Automation & Digital Transformation</SelectItem>
                    <SelectItem value="other">Other (please specify)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can I help you?"
                    className="min-h-[140px] rounded-lg border-gray-200 focus:border-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-full py-6 gradient-bg-primary font-medium text-base shadow-lg hover:shadow-primary/25"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane mr-2"></i> Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
