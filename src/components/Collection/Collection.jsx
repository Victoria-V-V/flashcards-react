function Collection(props) {
  return (
    <div className="App">
      <div className="superhero__name">{props.word.id}</div>
      {/* <div>{props.word.english}</div>
      <div>{props.word.transcription}</div>
      <div>{props.word.russian}</div>
      <div>{props.word.collection}</div> */}
    </div>
  );
}

export default Collection;
