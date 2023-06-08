
const Tab = ({children, onClick, selected, value}) => {

      return (
          <button
              className={selected ? `test__tab-button--selected test__tab-button` : `test__tab-button`}
              value={value}
              onClick={onClick ? e => onClick(e) : undefined}
          >
            {children}
          </button>
      );
    };
export default Tab;