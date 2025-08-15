import { useState } from 'react';
import { Input, Button, Space, message } from 'antd';
import './CustomInput.css'; // custom styles for this component

const CustomInput = () => {
  const [text, setText] = useState('');

  const handleSend = () => {
    console.log('Test: ', !text.trim())
    if (!text.trim()) {
      message.error('Please enter something first.');
      return;
    }
    // TODO: send to Google Sheets here
    console.log('Sending:', text);
    message.success('Sent!');
    setText('');
  };

  return (
    <div className="custom-input-container">
      <Space.Compact style={{ width: '100%', maxWidth: 520 }}>
        <Input
          size="large"
          placeholder="Type something to send..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onPressEnter={handleSend}
        />
        <Button size="large" type="primary" onClick={handleSend}>
          Send
        </Button>
      </Space.Compact>
    </div>
  );
};

export default CustomInput;
