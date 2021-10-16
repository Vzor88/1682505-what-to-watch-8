import React, {ChangeEvent} from 'react';

type StarProps = {
  star: number,
  updateValueStar: (arg0: string) => void,
}

function Star(props: StarProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${props.star}`} type="radio" name="rating" value={props.star} onChange={({target}: ChangeEvent<HTMLInputElement>) => {
        props.updateValueStar(target.value);
      }}
      />
      <label className="rating__label" htmlFor={`star-${props.star}`}>Rating {props.star}</label>
    </>
  );
}

export default Star;

