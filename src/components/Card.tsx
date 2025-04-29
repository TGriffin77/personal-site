interface CardProps{
  image: string;
  alt: string;
  title: string;
  description: string;
  delay: string;
}

function Card(props: CardProps) {
  return (
    <div className={`card sm:max-w-sm intersect:motion-delay-[${props.delay}ms] intersect:motion-preset-expand motion-duration-[1500ms]  intersect-half `}>
      <figure>
        <img
          src={props.image}
          alt={props.alt}
        />
      </figure>
      <div className="card-body space-y-3">
        <h5 className="card-title">{props.title}</h5>
        <p>
          {props.description}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Check it out!</button>
        </div>
      </div>
    </div>
  );
}

export default Card;