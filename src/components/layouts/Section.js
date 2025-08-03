import Container from "./Container";

export default function Section({ children, id = "", className = "" }) {
  return (
    <section className={`  py-20 ${className} `} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
