import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7Svg from '../../svgs/b7.svg';
import flamengo from '../../svgs/flamengo.svg';
import { items } from '../../data/items';

type Props = {
    item:GridItemType;
    onClick:() => void;
}
const GridItem = ({item, onClick}: Props) => {
    return(
       <C.Container 
        showBackground={item.permanentShown || item.shown}
        onClick={onClick}
       >
           {item.permanentShown === false && item.shown === false &&
            <C.Icon src={flamengo} alt="" opacity={.3} />
           }
           {(item.permanentShown || item.shown) && item.item !== null &&
            <C.Icon src={items[item.item].icon} alt="" />
           }
       </C.Container>
    )
}

export default GridItem;