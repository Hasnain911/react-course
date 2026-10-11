import { useState } from 'react';
import UseEffectHook from './UseEffectHook';

function ParentComponentUseEffect() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount Component' : 'Mount Component'}
      </button>

      {show && <UseEffectHook />}
    </div>
  );
}

export default ParentComponentUseEffect;

// Parent component mein ek button hai jo `show` state ko toggle karta hai. Jab button click hota hai, `show` state change hoti hai aur `UseEffectHook` component ko mount ya unmount kiya jata hai. Agar `show` true hai, to `UseEffectHook` render hota hai, aur agar false hai, to component unmount ho jata hai.or yeh example useEffect ke cleanup function ko demonstrate karta hai. Jab `UseEffectHook` unmount hota hai, to cleanup function call hota hai aur interval clear ho jata hai, jisse memory leak ya unwanted behavior se bach sakte hain.
