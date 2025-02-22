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


const userSchema = z.object({
    nombre: z
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres." })
      .max(50, { message: "El nombre no puede exceder los 50 caracteres." })
      .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {
        message: "El nombre solo puede contener letras y espacios.",
      }),
  
    apellido: z
      .string()
      .min(2, { message: "El apellido debe tener al menos 3 caracteres." })
      .max(50, { message: "El apellido no puede exceder los 50 caracteres." })
      .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {
        message: "El apellido solo puede contener letras y espacios.",
      }),
  
    fecha_nacimiento: z
      .string()
      .refine(
        (val) => {
          const fecha = new Date(val);
          return !isNaN(fecha.getTime()) && fecha <= new Date(); 
        },
        { message: "Debe ser una fecha válida" }
      ),
  });

type UserType = z.infer<typeof userSchema>;

export default function FormPariente() {
  const form = useForm<UserType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      fecha_nacimiento: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data: UserType) => {
    const fechaISO = new Date(data.fecha_nacimiento).toISOString().split("T")[0];
  
    const formattedData = {
      nombre: data.nombre,
      apellido: data.apellido,
      fecha_nacimiento: fechaISO,
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