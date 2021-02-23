import React from 'react'

const Chatbox2 = ({ messages }) => {
  return (
    <div className="card-body msg_card_body">
      {messages &&
        messages.map(msg => (
          <div
            key={msg.uniqueId}
            className={`d-flex justify-content-${msg.type === 'sent' ? 'start' : 'end'} mb-4`}
          >
            <div className="img_cont_msg">
              <img
                src={`${
                  msg.type === 'sent'
                    ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                    : 'http://www.icllean.com/dist/assets/app/media/img/custom/vertical_owl_logo.png'
                }`}
                className="rounded-circle user_img_msg"
              />
            </div>
            <div className="msg_cotainer">
              {msg.text}
              <span className="msg_time">8:40 AM, Today</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Chatbox2
