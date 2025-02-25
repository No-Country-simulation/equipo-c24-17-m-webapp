"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { parienteSchema } from "@/lib/schemas";

type UserType = z.infer<typeof parienteSchema>;

export default function FormPariente({ email }: { email: string }) {
  const form = useForm<UserType>({
    resolver: zodResolver(parienteSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      fecha_nacimiento: "",
      nombreDiagnostico: "",
      descripcionDiagnostico: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data: UserType) => {
    const fechaISO = new Date(data.fecha_nacimiento)
      .toISOString()
      .split("T")[0];

    const formattedData = {
      // email,
      nombre: data.nombre,
      apellido: data.apellido,
      fecha_nacimiento: fechaISO,
      nombreDiagnostico: data.nombreDiagnostico,
      descripcionDiagnostico: data.descripcionDiagnostico,
    };

    try {
      //   const response = await fetch("/api/Pariente", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formattedData),
      //   });

      //   if (!response.ok) {
      //     throw new Error("Error al enviar los datos");
      //   }

      //   const result = await response.json();
      //   console.log(result);
      console.log(formattedData);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  });

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="space-y-4 p-6 border rounded-lg shadow-md mt-10 w-[310px]  "
      >
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="apellido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Apellido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nombreDiagnostico"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diagnóstico</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Nombre del diagnóstico"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descripcionDiagnostico"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Descripción del diagnóstico"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fecha_nacimiento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Nacimiento</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button type="submit">Agregar</Button>
        </div>
      </form>
    </Form>
  );
}
