"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/8bit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Input } from "@/components/ui/input";

export default function MainMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [teamName, setTeamName] = useState("");
  const router = useRouter();

  const handleStart = () => {
    if (!teamName.trim()) {
      alert("Enter a valid team name");
      return;
    }

    // TEMP: localStorage (replace with DB later)
    localStorage.setItem("ctf_team", teamName.trim());

    router.push("/challenge/start"); // starting image page
  };

  return (
    <Card className={cn("w-full max-w-md", className)} {...props}>
      <CardHeader className="text-center">
        <CardTitle>NEXUX</CardTitle>
        <CardDescription>Enter your team name to begin</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Input
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <Button onClick={handleStart} className="w-full">
          START CTF
        </Button>
      </CardContent>
    </Card>
  );
}
