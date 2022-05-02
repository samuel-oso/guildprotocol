import { InputVariant, TextInput } from "@mantine/core";

export type FormControlProps = {
  control: "input" | "password";
  name: string;
  type?: "text" | "password" | "email" | "search" | "tel" | "url" | "number";
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  __staticSelector?: string;
  label?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant?: InputVariant;
  className?: string;

  radius?: number | "xs" | "sm" | "md" | "lg" | "xl";
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size: number }>;
};

function FormControl(props: FormControlProps) {
  const { control } = props;
  switch (control) {
    case "input":
      return <TextInput {...props} />;
    default:
      return null;
  }
}

export default FormControl;
