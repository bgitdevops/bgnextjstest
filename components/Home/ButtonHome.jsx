import Link from "next/link";

const themeClassMap = {
  default:
    "border-gray-800 bg-transparent text-black hover:bg-gray-800 hover:text-white",
  outline:
    "border-black bg-transparent text-black hover:text-gray-500 hover:border-gray-500",
};

const ButtonHome = (props) => {
  return (
    <Link
      data-sb-field-path={`${props.id}:label`}
      href={props.url || "#"}
      className={`py-3 px-8 inline-block border rounded-full transition-all duration-300 ${
        themeClassMap[props.theme] ?? themeClassMap["default"]
      }`}
    >
      {props.label}
    </Link>
  );
};

export default ButtonHome;
