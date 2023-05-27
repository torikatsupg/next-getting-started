import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email(),
  })
  .required({
    email: true,
  });

type Form = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    reset,
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  watch(console.log);

  const onsubmit = (data: any) => {
    console.log(data);
    setError("email", { type: "torikatsu", message: "custom error" });

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <label>input text</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <button>submit</button>
      </form>
    </>
  );
}
