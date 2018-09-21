function check(){
	var name=document.getElementsByName("name")[0];
	var email=document.getElementsByName("email")[0];
	var phone=document.getElementsByName('phone')[0];
	var message=document.getElementsByName('message')[0];
	var sub=document.getElementById('sub');
		
		var str="";
		var flag=true;
		if(!name.value.match(/^\S+$/)){
			str+="名字不能为空!\n"
			flag=false;
		}
		if((isNaN(phone.value))||(phone.value.charAt(0)==0)||(phone.value=="")){
			str+="请输入合法的号码!\n"
			flag=false;
		}
		if(!email.value.match(/\w+@\w+\.\w/)){
			str+="请输入正确的邮箱!\n"
			flag=false;
		}
		if(!message.value.match(/^\S+$/)){
			str+="提交的内容不能为空!\n";
			flag=false;
		}
		if(!flag)
		    alert(str)
		return flag;
onload=function(){

	var name=document.getElementsByName("name")[0];
	var email=document.getElementsByName("email")[0];
	var phone=document.getElementsByName('phone')[0];
	var message=document.getElementsByName('message')[0];
	var sub=document.getElementById('sub');
	
	
		
	}

}