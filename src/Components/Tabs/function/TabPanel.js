const TabPanel = ({children, selected, value}) => {
  console.log('selected:value:hidden', selected, value, (selected !== value));

  return (
      <div className='absolute top-0 bg-[#2F2F2F] h-[calc(100vh-64px)]' hidden={selected !== value}>
        {children}
      </div>
  );
};

export default TabPanel;