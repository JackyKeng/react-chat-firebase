import React from 'react'

const CustomerList2 = ({ users, customerOnClick, customerSelected }) => {
  return (
    <div className="card mb-sm-3 mb-md-0 contacts_card">
      <div className="card-header">
        <div className="input-group">
          <input type="text" placeholder="Search..." name="" className="form-control search" />
          <div className="input-group-prepend">
            <span className="input-group-text search_btn">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="card-body contacts_body">
        <ul className="contacts">
          {users &&
            users.map(user => (
              <li
                key={user.uniqueId}
                className={customerSelected === user.uid ? 'active' : ''}
                onClick={() => customerOnClick(user.uid)}
              >
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      className="rounded-circle user_img"
                    />
                  </div>
                  <div className="user_info">
                    <span>{user.uid}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="card-footer"></div>
    </div>
  )
}

export default CustomerList2
