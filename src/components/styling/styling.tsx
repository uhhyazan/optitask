export const addTaskButtonStyling = {
    fontWeight: 'bold',
    p: 2,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#C7D2FE',
    color: 'black',
    '&:hover': {
      background: "#6366F1",
      color: 'white'
    },
    borderRadius: 4,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  };
  
  export const columnStyling = {
    display: 'flex',
    flexDirection:'column',
    minWidth: '400px',
    height: 'calc(100vh - 200px)',
    position: 'relative',
    margin: 2,
    background:'#F5F5F4',
    borderRadius: 4,
    overflow: 'hidden',
    '@media (max-width: 600px)': {
        minWidth: 'calc(100vw - 300px)',
        maxHeight: 'calc(100vh - 300px)',
        flexDirection: 'row',
        alignItems: 'stretch',
      },
      
  }

  export const containerContentStyling = {
    display: 'flex',
    flexDirection:'column',
    mb: 3,
    overflow: 'scroll',
    '@media (max-width: 600px)': {
        minWidth: 'calc(100vw - 300px)',
        maxHeight: 'calc(100vh - 300px)',
      },
    
  }
  