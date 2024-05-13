import Container from "./Container";

type Props = {
  curWeather: string;
};

export default function Weather({ curWeather }: Props) {
  return (
    <Container>
      <h2 className="sm:text-xl mb-4 text-lg font-bold text-balance text-center">
        오늘 날씨
      </h2>
      <span className="text-5xl">{curWeather}</span>
    </Container>
  );
}
