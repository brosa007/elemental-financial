import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../_components/ui/button";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="mx-auto flex h-full max-w-lg flex-col justify-center p-8 gap-6">
        <Image
          src="/logo.png"
          alt="Logo Elemental Midia"
          width={250}
          height={30}
        />
        <h1 className="text-4xl font-bold">
          Bem-vindo, Arnaldo
        </h1>
        <p className="text-muted-foreground">
          Sua plataforma personalizada, feita com muito
          carinho para você gerir o financeiro da Elemental
          Midia
        </p>
        <Button>
          <LogInIcon className="mr-2" />
          Fazer login
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/bg-login.png"
          alt="Login"
          fill
          className="object-cover object-right"
        />
      </div>
    </div>
  );
}
