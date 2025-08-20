import Container from "./Container";

export default function Section({ children, id = "", className = "" }) {
  return (
    <section className={`py-28 ${className}`} id={id}>
      <Container>
        <div className="flex flex-col md:gap-20 gap-16">{children}</div>
      </Container>
    </section>
  );
}
