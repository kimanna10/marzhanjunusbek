import Container from "./Container";

export default function Section({ children, id = "", className = "" }) {
  return (
    <section className={` ${className}  py-20 bg-background`} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
