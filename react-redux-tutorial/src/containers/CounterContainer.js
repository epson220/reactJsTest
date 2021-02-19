import React, { useC, useCallback } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter
//       number={number}
//       onDecrease={decrease}
//       onIncreaes={increase}
//     ></Counter>
//   );
// };
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncreaes = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter
      number={number}
      onIncreaes={onIncreaes}
      onDecrease={onDecrease}
    ></Counter>
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   { increase, decrease },
// )(CounterContainer);

export default CounterContainer;
