import { type ReactNode, createElement } from "react";
import slugify from "slugify";

type CustomHeadingProps = {
  children: ReactNode;
  level: number;
};

const CustomHeading = ({ children, level }: CustomHeadingProps) => {
  const slug = slugify(children?.toString() ?? "");
  return createElement(
    `h${level}`,
    { id: slug },
    [
      createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "",
      }),
    ],
    children,
  );
};

CustomHeading.displayName = "CustomHeading";

export default function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children?: ReactNode }) => (
    <CustomHeading level={level}>{children}</CustomHeading>
  );
}
