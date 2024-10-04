import {
  IconBrandTypescript,
  IconBrandAzure,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandFirebase,
  IconCoffee,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandSass,
  IconBrandAndroid,
  IconBrandRedux,
  IconHexagonLetterE,
  IconBrandMongodb,
  TablerIconsProps,
} from "@tabler/icons-react";

export const techIcons = {
  TypeScript: IconBrandTypescript,
  "Azure Cosmos DB": IconBrandAzure,
  Node: IconBrandNodejs,
  React: IconBrandReact,
  "React Native": IconBrandReactNative,
  Firebase: IconBrandFirebase,
  Java: IconCoffee,
  HTML5: IconBrandHtml5,
  CSS3: IconBrandCss3,
  JavaScript: IconBrandJavascript,
  Python: IconBrandPython,
  Sass: IconBrandSass,
  Redux: IconBrandRedux,
  Android: IconBrandAndroid,
  Express: IconHexagonLetterE,
  MongoDB: IconBrandMongodb,
};

interface TechIconProps extends TablerIconsProps {
  tech: keyof typeof techIcons;
}

const TechIcon = ({ tech, ...props }: TechIconProps) => {
  const Icon = techIcons[tech];
  if (Icon === undefined) {
    console.warn(`Icon for ${tech} is not available`);
    return null;
  }
  return <Icon {...props} />;
};

export default TechIcon;
