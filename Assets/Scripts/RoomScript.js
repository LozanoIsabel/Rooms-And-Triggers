#pragma strict


public var ball: GameObject;
public var lights: GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter()
{
	
}



//ignore these functions. Will explain later



function dropBall()
{

	var ball2: GameObject = Instantiate(ball);
}


function turnOffLights()
{

	lights.SetActive(false);

}
