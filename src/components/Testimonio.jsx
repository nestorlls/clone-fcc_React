import '../stylesheets/Testimonio.css';

function Testimonio({
  data: { name, country, image, role, company, alt, testimony },
}) {
  return (
    <div className='container-testimonio'>
      <img
        src={require(`../images/testimonio-${image}.png`)}
        alt={`Foto de ${alt}`}
        className='img-testimonio'
      />
      <div className='container-txt-testimonio'>
        <p className='name-testimonio'>
          <strong>{name}</strong> in {country}
        </p>
        <p className='role-testimonio'>
          {role} at <strong>{company}</strong>
        </p>
        <p className='txt-testimonio'>"{testimony}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
