import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = async () => {};
  const handleSignup = async () => {};
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[80vh] w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] bg-white border-2 text-opacity-90 shadow-2xl rounded-3xl flex items-center justify-center">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center">
          <div className="flex flex-col gap-10 items-center justify-center w-full h-full p-5">
            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                <img src="/victory.svg" alt="emoji" className="h-[100px]" />
              </div>
              <p className="font-medium text-center">
                Fill in the details to get started with the best chat app!
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <Tabs className="w-full max-w-md">
                <TabsList className="bg-transparent rounded-none w-full flex">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                  >
                    Signup
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex flex-col gap-5 mt-10"
                  value="login"
                >
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    className="rounded-full m-10 p-6"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </TabsContent>
                <TabsContent
                  className="flex flex-col gap-5"
                  value="signup"
                >
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-full p-6"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleSignup}>
                    Signup
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
