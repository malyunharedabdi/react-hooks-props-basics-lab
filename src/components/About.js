import Links from "./Links";

function About({ bio, links }) {
  return (
    <div>
      {bio ? <p>{bio}</p> : null}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;