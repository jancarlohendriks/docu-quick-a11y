import React from 'react';
import Layout from '@theme/Layout';
import Checklist from '../components/Checklist';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
					<Checklist />
        {/* <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
				<button onClick={() => { alert("You clicked me"); }}>Click me</button> */}
      </div>
    </Layout>
  );
}

export default Hello;