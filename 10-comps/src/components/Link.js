import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

export default function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500 ml-1 pr-2 hover:border-r-4",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();

    navigate(to);
  };
  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}
