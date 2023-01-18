import {FC} from 'react';
import { BoxSocial } from './SocialElements';
import {ISocial} from "./Social.interface";

const Social: FC<ISocial> = ({img, alt}) => {
    return (
        <BoxSocial>
          <img src={img} alt={alt}/>
        </BoxSocial>
    );
};

export default Social;
