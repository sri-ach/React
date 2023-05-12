import { ProfileScientist } from "./ProfileScientist";
import  * as scientists from "../data/scientist_list";

export default function GalleryDetails(){
    return (
        <div>
          <h1>Notable Scientists - Details</h1>
          <ProfileScientist scientist={scientists.madamCurie}/>
          <ProfileScientist scientist={scientists.katsuko}/>
          <ProfileScientist scientist={scientists.heddy}/>         
        </div>
      );
}