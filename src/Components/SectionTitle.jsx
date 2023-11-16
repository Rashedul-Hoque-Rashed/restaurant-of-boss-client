import PropTypes from 'prop-types';

const SectionTitle = ({subHeader, header}) => {
    return (
        <div className="text-center w-1/3 mx-auto mb-12">
            <p className="text-xl font-normal font-inter italic text-[#D99904] p-4">---{subHeader}---</p>
            <h4 className="text-4xl font-normal font-inter border-y-4 p-6">{header}</h4>
        </div>
    );
};

SectionTitle.propTypes = {
    subHeader: PropTypes.string,
    header: PropTypes.string,
}

export default SectionTitle;