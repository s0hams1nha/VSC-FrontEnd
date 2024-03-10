#include<bits/stdc++.h>
using namespace std;

int maxsubarray(int x[], int size){
  int maxsum=-INFINITY;
  int continoussum=0;
  for(int i=0; i<size; i++){
    continoussum+=x[i];
    if(x[i]>continoussum){
      continoussum=x[i];
    }
    if(maxsum<continoussum){
      maxsum=continoussum;
      }
    
  }
  return maxsum;
}

int main(){
  int n[]={2, -4, 1, 9, -6, 7, -3};
  int s= sizeof(n)/sizeof(n[1]);
  cout<<maxsubarray(n, s);
}