import * as React from 'react';
import {useState ,ChangeEvent } from 'react' ; 
import {connectWifiafterLike} from "../pfeBackend/fbconflike.js";

export default function FblikeWifiConnect() {
 

  const pageid = "" ;
  const page_url = "" ;

  var status = connectWifiafterLike(pageid , page_url) ;


    const [file, setFile] = useState<File>();

  const handleFileChange = ( e: ChangeEvent<HTMLInputElement> )   => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };




  return (
    <div className='FblikeWifiConnect'>
      {
        (status) && (
        
                  <div className='ConnectWifi'> 
                    
                    <div className='CVupload'> 
                      
                      <div className='upload'>  Uploading your CV   </div>
                      <input type="file" onChange={handleFileChange} />
                      <button className='upload' onClick={handleUploadClick}>  UPLOAD  </button>

                    </div>
                  </div>
        ) 
        :
        (
          <div class="container">
            <Card style={{ width: '600px' }}>
              <Card.Header>
                { !login && 
                  <FacebookLogin
                    appId="609712131208346"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook" />
                }
                { login &&
                  <Image src={picture} roundedCircle />
                }
              </Card.Header>
              { login &&
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>
                    {data.email}
                  </Card.Text>
                </Card.Body>
              }
            </Card>
          </div>
          )


      }


    </div>
  );
}