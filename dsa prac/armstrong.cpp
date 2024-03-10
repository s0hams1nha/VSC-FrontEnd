#include<bits/stdc++.h>
using namespace std;
bool checkArmstrong(int n){
	//Write your code here
	string num= to_string(n);
	int sum=0;
	for(int i=0; i<num.length(); i++){
		sum+=(num[i]-'0')^num.length();
	}
	if(sum==n){
		return true;
	}else{
		return false;
	}
}
