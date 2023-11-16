import ShopItems from './ShopItems';
import PropTypes from 'prop-types';

const ShopTab = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                items.map(item => <ShopItems key={item._id} item={item}></ShopItems>)
            }
        </div>
    );
};

ShopTab.propTypes = {
    items: PropTypes.array
}
export default ShopTab;