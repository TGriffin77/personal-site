interface CardProps {
  image?: string;
  alt?: string;
  title: string;
  description: string;
  onOpen?: () => void;
}

function Card(props: CardProps) {
  return (
    <div
      className="card p-0.5 sm:max-w-sm min-w-[240px] md:max-w-[356px] bg-base-200 intersect:motion-opacity-in-0 intersect:motion-scale-in-0 intersect:motion-preset-focus motion-duration-[1500ms] motion-delay-100 intersect-half intersect-once "
      no-intersect
    >
      <figure>
        <img src={props.image} alt={props.alt} />
      </figure>
      <div className="card-body space-y-3">
        <h5 className="card-title">{props.title}</h5>
        <p>{props.description}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={props.onOpen}>check it out!</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
