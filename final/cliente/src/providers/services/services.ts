import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  public url = "https://turisteape.herokuapp.com/api/";
  //localhost:3977
  constructor(public http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }

  getBranchs(){
    return this.http.get(this.url + 'branchs/read');
  }

  getOrganization(){
    return this.http.get(this.url + 'organizations/read');
  }

  getEditoriales(){
    return this.http.get(this.url + 'editoriales/read');
  }
  getCopies(){
    return this.http.get(this.url + 'copies/read');
  }
  getUser(id:any){
    return this.http.get(this.url + 'user/read/'+id);
  }

  IP(){
    var ip="https://api.ipify.org?format=json";
    return this.http.get(ip);
  }
  public ip:any;
  getip(){
    this.IP().subscribe(
      (result) =>{
        this.ip = result;
        return this.ip;
      }
    )
  }

  createBranch(branch:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.put(this.url + 'branchs/update', {
      name:branch.name,
      address:branch.address,
      latitude:branch.latitude,
      longitude:branch.longitude,
      status:branch.status,
      id:branch.id

    },  httpOptions);
  
  }

  createEditorial(editorial:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.put(this.url + 'editoriales/update', {
      name:editorial.name,
      address:editorial.address,
      country:editorial.country,
      website:editorial.website,
      status:editorial.status,
      id:editorial.id

    },  httpOptions);
  
  }
  createOrganization(org:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.put(this.url + 'organizations/update', {
      name:org.name,
      id:org.id,
      status:org.status

    },  httpOptions);
  
  }

  createAccess(acc:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.post(this.url + 'access/create', {
      ip:acc.ip,
      user_id:acc.user_id,
      user_agent:acc.user_agent

    },  httpOptions);
  
  }

  deleteBranc(id,table){
    return this.http.delete(this.url + table+'/delete/'+id);
  }


  login(user:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.post(this.url + 'user/login', {
      userName:user.userName,
      password:user.password

    },  httpOptions);
  
  }

  register(user:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.post(this.url + 'user/create', {
      userName:user.userName,
      password:user.password,
      gender:user.gender,
      birth:user.birth,
      estatus:user.estatus,
      role_id:user.role_id

    },  httpOptions);
  
  }
  updateUser(user:any){
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.put(this.url + 'user/update', {
      id:user.id,
      userName:user.userName,
      password:user.password,
      gender:user.gender,
      birth:user.birth,
      estatus:user.estatus,
      role_id:user.role_id

    },  httpOptions);
  
  }


  crud(type,entity){
    var id = localStorage.getItem('biblioteca_user');
    const httpOptions =  {
        headers:  new HttpHeaders( {
            'Content-Type': 'application/json'
        })
    };
    return this.http.post(this.url + 'cruds/create', {
      user_id:id,
      type:type,
      entity:entity
    },  httpOptions);
  
  }

  generateCrud(type,entity){
    var id = localStorage.getItem('biblioteca_user');
    if(id != null){
      this.crud(type,entity).subscribe(
        (result)=>{
          console.log(result);
        }
      )
    }
  }


}
