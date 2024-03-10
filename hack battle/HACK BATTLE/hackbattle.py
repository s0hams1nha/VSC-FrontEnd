import mediapipe as mp #mediapipe solutions for handtracking
import cv2 #used to connect to webcam
import numpy as np #used to word with different outputs
import uuid #unique uniform identifier(generate random string to be used as image name)
import os #python's os library

mp_drawing= mp.solutions.drawing_utils #drawing utilities (renders the different landmarks on the hand)
mp_hands=mp.solutions.hands #gets the hands model and preset landmarks


cap=cv2.VideoCapture(0) #videocapture device number 0(if error or image has 3 dimensions, play around with this number)
with mp_hands.Hands(min_detection_confidence=0.8 , min_tracking_confidence=0.5) as hands:     #instantiate mediapipe hands model, detection and tracking confidence means how accurate does the image on the screen need to be to detect/track 
   
  while cap.isOpened():                     
    ret, frame=cap.read()    #read each frame

    #BGR 2 RGB
    image=cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)   #default format is BGR, mediapipe needs RGB, this is that conversion
    
    #set flag
    image.flags.writeable=False    #to avoid copying of image

    #DETECTIONS
    results=hands.process(image)

    #set flag to true
    image.flags.writeable=True
    
    #RGB 2 BGR
    image=cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    
    #detections
    print(results)
    
    if results.multi_hand_landmarks:  #checks if there is a hand in the frame
       for num, hand in enumerate(results.multi_hand_landmarks):   #looping through landmarks variables for hand on frame for each frame
          mp_drawing.draw_landmarks(image, hand, mp_hands.HAND_CONNECTIONS)  #
    
    cv2.imshow('Hand Tracking', image)   #render image to screen
    if cv2.waitKey(10) & 0xFF==ord('x'):   #if press q -> closes webcam
        break
cap.release()
cv2.destroyAllWindows()