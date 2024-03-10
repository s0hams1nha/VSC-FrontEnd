#include<bits/stdc++.h>
using namespace std;

int main(){
  vector<int> v;
  v.emplace_back(24);
  v.push_back(45);
  v.emplace_back(1);
  vector<int> v2(v);

  vector<int>::iterator i;
  vector<int>::iterator j;
  for(i = v.begin(); i!=v.end(); i++){
    cout<<*(i)<<endl;
  }
  for(j=v2.begin(); j!=v2.end(); j++){
    cout<<*j<<endl;
  }
  return 0;
}