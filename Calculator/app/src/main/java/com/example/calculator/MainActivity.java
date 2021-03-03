package com.example.calculator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import de.congrace.exp4j.ExpressionBuilder;
import de.congrace.exp4j.UnknownFunctionException;
import de.congrace.exp4j.UnparsableExpressionException;

import static java.lang.Math.*;


public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private int i=0;
    private EditText resultDisplay;
    private static final int idarr[]={R.id.btn0,R.id.btn1,R.id.btn2,R.id.btn3,R.id.btn4,R.id.btn5,R.id.btn6,R.id.btn7,R.id.btn8,R.id.btn9,R.id.btnPlus,R.id.btnMinus,R.id.btnProduct,R.id.btnDivide,R.id.btnResult,R.id.btnDecimal,R.id.btnClear,R.id.btnBracket1,R.id.btnBracket2};
    private Button btnArray[] = new Button[idarr.length];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        for(i=0;i<idarr.length;i++)
        {
            btnArray[i] = findViewById(idarr[i]);
        }
        for(i=0;i<idarr.length;i++)
        {
            btnArray[i].setOnClickListener(this);
        }
        resultDisplay = findViewById(R.id.displayVal);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId())
        {
            case R.id.btn0:
                resultDisplay.setText(resultDisplay.getText().toString()+"0");
                break;
            case R.id.btn1:
                resultDisplay.setText(resultDisplay.getText().toString()+"1");
                break;
            case R.id.btn2:
                resultDisplay.setText(resultDisplay.getText().toString()+"2");
                break;
            case R.id.btn3:
                resultDisplay.setText(resultDisplay.getText().toString()+"3");
                break;
            case R.id.btn4:
                resultDisplay.setText(resultDisplay.getText().toString()+"4");
                break;
            case R.id.btn5:
                resultDisplay.setText(resultDisplay.getText().toString()+"5");
                break;
            case R.id.btn6:
                resultDisplay.setText(resultDisplay.getText().toString()+"6");
                break;
            case R.id.btn7:
                resultDisplay.setText(resultDisplay.getText().toString()+"7");
                break;
            case R.id.btn8:
                resultDisplay.setText(resultDisplay.getText().toString()+"8");
                break;
            case R.id.btn9:
                resultDisplay.setText(resultDisplay.getText().toString()+"9");
                break;
            case R.id.btnPlus:
                resultDisplay.setText(resultDisplay.getText().toString()+"+");
                break;
            case R.id.btnMinus:
                resultDisplay.setText(resultDisplay.getText().toString()+"-");
                break;
            case R.id.btnProduct:
                resultDisplay.setText(resultDisplay.getText().toString()+"*");
                break;
            case R.id.btnDivide:
                resultDisplay.setText(resultDisplay.getText().toString()+"/");
                break;
            case R.id.btnDecimal:
                resultDisplay.setText(resultDisplay.getText().toString()+".");
                break;
            case R.id.btnBracket1:
                resultDisplay.setText(resultDisplay.getText().toString()+"(");
                break;
            case R.id.btnBracket2:
                resultDisplay.setText(resultDisplay.getText().toString()+")");
                break;
            case R.id.btnClear:
                resultDisplay.setText("");
                break;
            case R.id.btnResult:
                //eval method
                //Expression exp1 = new Expression(resultDisplay.getText().toString()).build();
                if(resultDisplay.getText().toString().matches(""))
                {
                    Toast.makeText(getApplicationContext(),"Nothing To Calculate",Toast.LENGTH_LONG).show();
                }
                else
                {
                    double result = 0;
                    try {
                        result = new ExpressionBuilder(resultDisplay.getText().toString())
                                .build()
                                .calculate();
                    } catch (UnknownFunctionException e) {
                        e.printStackTrace();
                    } catch (UnparsableExpressionException e) {
                        e.printStackTrace();
                    }
                    resultDisplay.setText(String.valueOf(result));
                }
                break;
        }
    }
}
