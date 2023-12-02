import classes from "./TestComponent.module.scss";
const TestComponent = () => {
  return (
    <div className="container-two">
      <div className={classes.content}>
        <h1>This is a Header 1</h1>
        <p>This is a Paragraph 1</p>
      </div>
    </div>
  );
};

export default TestComponent;
