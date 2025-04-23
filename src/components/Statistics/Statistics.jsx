import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const iconsSet = [
    <FaRegThumbsUp key={1} size={32} />,
    <MdPeople key={2} size={32} />,
    <MdOutlineProductionQuantityLimits key={3} size={32} />,
    <GiTreeDoor key={4} size={32} />,
  ];
  return (
    <>
      {title ? <h3 className={style.title}>Main Statistics</h3> : <></>}
      <ul className={style.list}>
        {stats.map(item => {
          return (
            <li className={style.item} key={item.id}>
              <StatisticsItem
                icon={iconsSet[item.id - 1]}
                title={item.title}
                total={item.total}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
