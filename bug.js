```javascript
//index.js
import MyComponent from './MyComponent.js';

function App() {
  return (
    <div className="bg-gray-100">
      <MyComponent/>
    </div>
  );
}
export default App;
```
```javascript
//MyComponent.js
import React from 'react';

function MyComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <p>This is my component</p>
      </div>
    </div>
  );
}
export default MyComponent;
```