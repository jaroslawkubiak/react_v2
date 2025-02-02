import className from "classnames";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(
      rest.className,
      "flex items-center gap-2 m-1 px-3 py-1.5 border cursor-pointer",
      {
        "bg-blue-500 border-blue-800 text-white": primary,
        "bg-gray-900 border-gray-900 text-white": secondary,
        "bg-green-500 border-green-600 text-white": success,
        "bg-yellow-500 border-yellow-800 text-white": warning,
        "bg-red-500 border-red-800 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-500": outline && secondary,
        "text-green-500": outline && success,
        "text-yelloe-500": outline && warning,
        "text-red-500": outline && danger,
      }
    )
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true!"
      );
    }
  },
};
