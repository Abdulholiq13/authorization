"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { ThemeProvider } from "@/components/ui/theme-provider";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "@/api";
import { Link, useNavigate } from "react-router-dom";

import { Toaster, toast } from "sonner";
import { useDispatch } from "react-redux";

const formSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = (data) => {
    axios
      .post("/admins/sign-in", data)
      .then((res) => {
        toast.success(res.data.msg);
        dispatch({ type: "LOGIN", payload: res.data.payload.token });
        navigate("/");
      })
      .catch((res) => {
        toast.error(res.response.data.msg);
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
              Don’t have an account yet?
              <Link className="text-[#0f172a]" to="/sign-up">
                Sign up here
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
