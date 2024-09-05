"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import * as z from "zod";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "@/api";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(3).max(50),
  fname: z.string().min(4).max(50),
  phone: z.string().min(9).max(30),
  // lname: z.string().min(4).max(50),
  password: z.string().min(6),
});

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      phone: "",
      username: "",
      password: "",
    },
  });

  const handleSubmit = (data) => {
    axios
      .post("/sign-up", data)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((error) => {
        toast.error(error.response?.data?.msg);
      });
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="container h-screen flex items-center justify-center p-5 flex-col">
        <Toaster richColors />
        <div className="p-6 shadow-base rounded-xl">
          <h2 className="text-3xl font-bold mb-5">Sign in to your account</h2>
          <Form {...form}>
            <form
              className="flex flex-col items-center justify-between gap-4 w-[400px]"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input placeholder="Firstname" {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input placeholder="Lastname" {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone" {...field} type="phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-3 flex gap-2">
              Already have an account?
              <Link className="text-[#0f172a]" to="/login">
                Login here
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SignUp;
