import React from 'react'

const Header = function() {
    const headerStyle = {
        background: '#000',
        color:'#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '20px'
    }
    return (
        <div style={headerStyle}>
          Phone Directory
        </div>
    )
}

export default Header;